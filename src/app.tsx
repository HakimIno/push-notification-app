import { useState } from 'preact/hooks'
import '@radix-ui/themes/styles.css';
import { Box, Button, Flex, Tabs, Text, TextField, Theme } from '@radix-ui/themes';
import { API_URL_ENDPOINT } from './utils/http';

export function App() {

  const [to, setTo] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const message = {
      to,
      title,
      body,
      data: { extraData: data },
    };

    try {
      const response = await fetch(API_URL_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        throw new Error('Failed to send push notification');
      }

      alert('Push notification sent successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending push notification');
    }
  };

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    //@ts-ignore
    setter(e.target.value);
  };


  return (
    <Theme appearance="dark">
      <Flex
        direction="column"
        align="center"
        minHeight="100vh" // ใช้ความสูงเต็มหน้าจอ
        p="4" // กำหนด Padding
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          p="4" // Padding
          className={"w-full max-w-screen-lg"}
        >
          <Text
          >
            Push notifications
          </Text>

          <Box pt="3" className={"w-full max-w-screen-xl"}>
            <Tabs.Root defaultValue="all" >
              <Tabs.List>
                <Tabs.Trigger value="all">แจ้งเตือนทั้งหมด</Tabs.Trigger>
                <Tabs.Trigger value="person">แจ้งเตือนรายคน</Tabs.Trigger>
              </Tabs.List>

              <Box pt="3">
                <Tabs.Content value="all">
                  <Flex direction="column" gap="4">
                    <Box maxWidth="100%" >
                      <Text>Title:</Text>
                      <TextField.Root
                        size="3"
                        value={title}
                        onChange={handleChange(setTitle)}
                        placeholder="Title"
                        required
                      />
                    </Box>
                    <Box maxWidth="100%" >
                      <Text>Body:</Text>
                      <TextField.Root
                        size="3"
                        value={body}
                        onChange={handleChange(setBody)}
                        placeholder="This is a test notification"
                        required
                      />
                    </Box>
                    <Box maxWidth="100%" >
                      <Text>Data:</Text>
                      <TextField.Root
                        size="3"
                        value={data}
                        onChange={handleChange(setData)}
                        placeholder="Extra data"
                      />
                    </Box>

                    <Box maxWidth="200px" >
                      {/* @ts-ignore */}
                      <Button variant="soft" radius='large' size={"3"}>
                        แจ้งเตือนทั้งหมด
                      </Button>
                    </Box>

                  </Flex>
                </Tabs.Content>

                <Tabs.Content value="person">
                  <Flex direction="column" gap="4">
                    <Box maxWidth="100%" >
                      <Text>to:</Text>
                      <TextField.Root
                        size="3"
                        value={to}
                        onChange={handleChange(setTo)}
                        placeholder="ExponentPushToken[*****************]"
                        required
                      />
                    </Box>
                    <Box maxWidth="100%" >
                      <Text>Title:</Text>
                      <TextField.Root
                        size="3"
                        value={title}
                        onChange={handleChange(setTitle)}
                        placeholder="Title"
                        required
                      />
                    </Box>
                    <Box maxWidth="100%" >
                      <Text>Body:</Text>
                      <TextField.Root
                        size="3"
                        value={body}
                        onChange={handleChange(setBody)}
                        placeholder="This is a test notification"
                        required
                      />
                    </Box>
                    <Box maxWidth="100%" >
                      <Text>Data:</Text>
                      <TextField.Root
                        size="3"
                        value={data}
                        onChange={handleChange(setData)}
                        placeholder="Extra data"
                      />
                    </Box>

                    <Box maxWidth="250px">
                      <Button
                        variant="soft"
                        radius='large'
                        // @ts-ignore
                        size={"3"}
                        onClick={handleSubmit}>
                        แจ้งเตือนทั้งหมด
                      </Button>
                    </Box>
                  </Flex>
                </Tabs.Content>
              </Box>


            </Tabs.Root>
          </Box>
        </Flex>
      </Flex>
    </Theme>
  )
}
