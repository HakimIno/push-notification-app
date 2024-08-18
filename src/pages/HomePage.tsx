import { useEffect, useState } from 'preact/hooks'
import '@radix-ui/themes/styles.css';
import { Box, Button, Flex, Spinner, Tabs, Text, Theme } from '@radix-ui/themes';
import toast, { Toaster } from 'react-hot-toast';

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import supabase from '../utils/supabase';
import { API_URL_ENDPOINT } from '../utils/http';
import NotificationForm from '../components/NotificationForm';

export function HomePage() {

    const [to, setTo] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [data, setData] = useState('');

    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [loading, setLoading] = useState(false)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmitToDb = async () => {
        if (selectedFile && title && body) {
            const { error: storageError } = await supabase.storage
                .from('banner')
                .upload(`images/${selectedFile.name}`, selectedFile, {
                    cacheControl: '3600',
                    upsert: false,
                });

            if (storageError) {
                console.error("Upload error:", storageError.message);
            } else {
                const imageUrl = supabase.storage
                    .from('banner')
                    .getPublicUrl(`images/${selectedFile.name}`).data.publicUrl;

                const { } = await supabase
                    .from('advert')
                    .insert([
                        { title, description: body, image: imageUrl },
                    ]);
            }
        }
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true); // ตั้งสถานะการโหลดเป็น true

        const message = {
            to,
            title,
            body,
            data: { extraData: data },
        };

        try {
            if (selectedFile && title && body) {
                const response = await fetch(API_URL_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ...message, to: `ExponentPushToken[${to}]` }),
                });

                if (!response.ok) {
                    throw new Error('Failed to send push notification');
                }

                setTo("");
                setTitle("");
                setBody("");
                setData("");
                toast.success('Push notification sent successfully!');
            } else {
                toast.error('Error sending push notification!');
            }

        } catch (error) {
            toast.error('Error sending push notification!');
        } finally {
            setLoading(false); // ตั้งสถานะการโหลดเป็น false หลังจากเสร็จสิ้นการทำงาน
        }
    };


    const fetchTokensFromSupabase = async () => {
        const { data, error } = await supabase
            .from('tokens_push_notification')
            .select('token');

        if (error) {
            console.error('Error fetching tokens from Supabase:', error);
            return [];
        }
        return data;
    };

    const handleSubmitAll = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);  // ตั้งสถานะการโหลดเป็น true

        const message = {
            to,
            title,
            body,
            data: { extraData: data },
        };

        try {
            if (selectedFile && title && body) {

                const tokens = await fetchTokensFromSupabase();

                if (tokens.length === 0) {
                    toast.error('No tokens found!');
                    setLoading(false);  // ตั้งสถานะการโหลดเป็น false
                    return;
                }

                await handleSubmitToDb()

                // ส่งการแจ้งเตือน push ไปยัง token แต่ละตัว
                await Promise.all(tokens.map(async ({ token }) => {
                    const response = await fetch(API_URL_ENDPOINT, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ ...message, to: `ExponentPushToken[${token}]` }),
                    });

                    if (!response.ok) {
                        throw new Error(`Failed to send notification to ${token}`);
                    }
                }));

                // ล้างข้อมูลฟอร์ม
                setTo("");
                setTitle("");
                setBody("");
                setData("");
                setSelectedFile(null);
                setSelectedImage(null);
                toast.success('Push notifications sent successfully!');
            } else {
                toast.error('Error sending push notifications!');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error sending push notifications!');
        } finally {
            setLoading(false);  // ตั้งสถานะการโหลดเป็น false ไม่ว่าจะเกิดข้อผิดพลาดหรือไม่
        }
    };



    const [userId, setUserId] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_, session) => {
            if (session?.user) {
                setUserId(session.user.id);
            } else {
                setUserId('');
            }
            setIsLoading(false);
        });

        return () => {
            subscription?.unsubscribe();
        };
    }, []);

    const signout = async () => {
        await supabase.auth.signOut();
    };

    if (isLoading) {
        return (
            <Theme appearance="dark">
                <Flex direction="column" align="center" justify="center" minHeight="100vh" gap={"3"}>
                    {/* @ts-ignore */}
                    <Spinner size="3" />
                    <Text>Loading...</Text>
                </Flex>
            </Theme>
        );
    }


    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            {
                userId == '' ? (

                    <Flex
                        direction="column"
                        align="center"
                        minHeight="100vh"
                        justify="center"
                        p="4"
                    >
                        <Flex className={"w-full max-w-sm"}
                            direction="column"
                            justify="center"
                        >
                            <Auth
                                supabaseClient={supabase}
                                appearance={{
                                    theme: ThemeSupa,
                                    variables: {
                                        default: {
                                            colors: {
                                                inputText: '#ffffff', // White text color
                                                inputPlaceholder: '#cccccc', // Placeholder color
                                            },
                                        },
                                    },
                                }}
                                view="sign_in"
                                providers={[]}
                            />
                        </Flex>
                    </Flex>

                ) : (
                    <Theme appearance="dark">
                        <Flex
                            direction="column"
                            align="center"
                            minHeight="100vh"
                            p="4"
                        >
                            <Flex
                                direction="column"
                                align="center"
                                justify="center"
                                p="4" // Padding
                                className={"w-full max-w-screen-lg"}
                            >
                                <Text
                                    weight={"bold"}
                                    className={"text-xl"}
                                >
                                    Push notifications Brid Game
                                </Text>

                                <Box>
                                    <Button onClick={signout}>Logout</Button>
                                </Box>

                                <Box pt="3" className={"w-full max-w-screen-xl"}>
                                    <Tabs.Root defaultValue="all" >
                                        <Tabs.List>
                                            <Tabs.Trigger value="all">แจ้งเตือนทั้งหมด</Tabs.Trigger>
                                            <Tabs.Trigger value="person">แจ้งเตือนรายคน</Tabs.Trigger>
                                        </Tabs.List>
                                        <Box pt="3">
                                            <Tabs.Content value="all">
                                                <NotificationForm
                                                    title={title}
                                                    setTitle={setTitle}
                                                    body={body}
                                                    setBody={setBody}
                                                    data={data}
                                                    setData={setData}
                                                    onSubmit={handleSubmitAll}
                                                    selectedImage={selectedImage}
                                                    handleFileChange={handleFileChange}
                                                    loading={loading}
                                                />
                                            </Tabs.Content>

                                            <Tabs.Content value="person">
                                                <NotificationForm
                                                    title={title}
                                                    setTitle={setTitle}
                                                    body={body}
                                                    setBody={setBody}
                                                    data={data}
                                                    setData={setData}
                                                    to={to}
                                                    setTo={setTo}
                                                    onSubmit={handleSubmit}
                                                    selectedImage={selectedImage}
                                                    handleFileChange={handleFileChange}
                                                    loading={loading}
                                                />
                                            </Tabs.Content>
                                        </Box>
                                    </Tabs.Root>
                                </Box>
                            </Flex>
                        </Flex >
                    </Theme>
                )
            }
        </>

    )
}
