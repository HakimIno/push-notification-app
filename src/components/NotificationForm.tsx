import { FC } from 'preact/compat';
import { Box, Flex, Spinner, Text, TextField } from "@radix-ui/themes";

interface NotificationFormProps {
    title: string;
    setTitle: (value: string) => void;
    body: string;
    setBody: (value: string) => void;
    data: string;
    setData: (value: string) => void;
    to?: string;
    setTo?: (value: string) => void;
    onSubmit: (e: { preventDefault: () => void }) => Promise<void>;
    selectedImage: string | ArrayBuffer | null
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    loading: boolean
}

// Component for TextField with label
const LabeledTextField:
    FC<{ label: string; value: string; onChange: (e: any) => void; placeholder: string; required?: boolean }> =
    ({ label, value, onChange, placeholder, required }) => (
        <Box maxWidth="100%">
            <Text>{label}</Text>
            <TextField.Root
                size="3"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </Box>
    );

const NotificationForm: FC<NotificationFormProps> = ({
    title,
    setTitle,
    body,
    setBody,
    data,
    setData,
    to,
    setTo,
    onSubmit,
    selectedImage,
    handleFileChange,
    loading
}) => (
    <Flex direction="column" gap="4">
        {to !== undefined && setTo !== undefined && (
            <LabeledTextField
                label="To:"
                value={to}
                onChange={(e: any) => setTo(e.target.value)}
                placeholder="token"
                required
            />
        )}
        <LabeledTextField
            label="Title:"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
            placeholder="Title"
            required
        />
        <LabeledTextField
            label="Body:"
            value={body}
            onChange={(e: any) => setBody(e.target.value)}
            placeholder="This is a test notification"
            required
        />
        <LabeledTextField
            label="Data:"
            value={data}
            onChange={(e: any) => setData(e.target.value)}
            placeholder="Extra data"
        />
        <Box className="flex flex-col items-start justify-start">
            <label htmlFor="uploadFile1"
                className="flex bg-gray-900 hover:bg-gray-800 text-white text-base px-5 py-2 outline-none rounded-lg cursor-pointer font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 mr-2 fill-white inline" viewBox="0 0 32 32">
                    <path
                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                        data-original="#000000" />
                    <path
                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                        data-original="#000000" />
                </svg>
                Upload Image
                <input type="file" id="uploadFile1" className="hidden" onChange={handleFileChange} />
            </label>
            {selectedImage && (
                <Box mt="4">
                    <img src={selectedImage as string} alt="Selected" className="max-w-full h-[400px] rounded-lg border border-dashed border-gray-400 p-1" />
                </Box>
            )}
        </Box>
        <Box maxWidth="250px" mt="4" loading="eager">
            <button
                variant="soft"
                radius="large"
                //@ts-ignore
                size="3"
                onClick={onSubmit}
                disabled={loading} // ปิดการคลิกปุ่มเมื่อกำลังโหลด
                className={"bg-blue-600 w-48 h-10 flex justify-center items-center text-white rounded-lg font-semibold gap-3"}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                    <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
                </svg>

                <div className="w-[70%]">
                    {loading ? <Spinner className={"ml-12"} /> : <span className={"text-center"}>Send Notification</span>}
                </div>
            </button>
        </Box>
    </Flex>
);

export default NotificationForm;
