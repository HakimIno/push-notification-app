import React, { useState } from 'react';

const PrivacyPolicy = () => {
    const [language, setLanguage] = useState('th'); // ตั้งค่าเริ่มต้นเป็นภาษาไทย

    const toggleLanguage = () => {
        setLanguage(language === 'th' ? 'en' : 'th');
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-[#242424] shadow-lg rounded-lg mt-10">
            <div className="flex justify-end items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                </svg>
                <button
                    onClick={toggleLanguage}
                    className="text-gray-400"
                >
                    {language === 'th' ? 'English' : 'ภาษาไทย'}
                </button>
            </div>

            {language === 'th' ? (
                <div>
                    <h1 className="text-xl font-bold text-center text-gray-400 mb-6">นโยบายความเป็นส่วนตัว</h1>
                    <p className="text-base text-gray-400 leading-relaxed mb-2">
                        ขอบคุณที่ใช้บริการเกมของเรา เกมนี้พัฒนาและให้บริการโดยบริษัท <strong>W Baby Bird</strong>. เรามุ่งมั่นที่จะปกป้องข้อมูลส่วนบุคคลของคุณและขอแจ้งให้ทราบว่าเกมนี้ไม่ได้เก็บข้อมูลส่วนบุคคลใด ๆ นอกเหนือจาก <strong>Token สำหรับการแจ้งเตือน</strong> เท่านั้น
                    </p>

                    <h2 className="text-md font-semibold text-blue-600 mb-1">1. ข้อมูลที่เราเก็บรวบรวม</h2>
                    <p className="text-base text-gray-400 leading-relaxed mb-2">
                        เราเก็บรวบรวมเฉพาะ <strong>Notification Token</strong> ซึ่งเป็นรหัสที่ใช้สำหรับส่งการแจ้งเตือนต่าง ๆ ไปยังอุปกรณ์ของคุณเท่านั้น
                    </p>

                    <h2 className="text-md font-semibold text-blue-600 mb-1">2. วิธีการใช้ข้อมูลของคุณ</h2>
                    <p className="text-base text-gray-400 leading-relaxed mb-2">
                        Notification Token ที่เราเก็บรวบรวมจะถูกใช้เพื่อ:
                    </p>
                    <ul className="list-disc list-inside text-base text-gray-400 leading-relaxed mb-2">
                        <li>ส่งการแจ้งเตือนเกี่ยวกับการอัปเดตในเกม</li>
                        <li>แจ้งข่าวสารและโปรโมชั่นต่าง ๆ ที่เกี่ยวข้องกับเกม</li>
                    </ul>

                    <h2 className="text-md font-semibold text-blue-600 mb-1">3. ความปลอดภัยของข้อมูล</h2>
                    <p className="text-base text-gray-400 leading-relaxed mb-4">
                        เรามุ่งมั่นที่จะปกป้อง Notification Token ของคุณด้วยมาตรการความปลอดภัยที่เหมาะสม ข้อมูลนี้จะไม่ถูกใช้หรือเปิดเผยให้กับบุคคลที่สาม ยกเว้นในกรณีที่จำเป็นตามกฎหมาย
                    </p>

                    <h2 className="text-md font-semibold text-blue-600 mb-1">4. การเปลี่ยนแปลงนโยบายความเป็นส่วนตัว</h2>
                    <p className="text-base text-gray-400 leading-relaxed mb-4">
                        เราอาจปรับปรุงนโยบายความเป็นส่วนตัวนี้ในอนาคต การเปลี่ยนแปลงใด ๆ จะถูกโพสต์บนหน้านี้พร้อมกับวันที่แก้ไขล่าสุด
                    </p>

                    <h2 className="text-md font-semibold text-blue-600 mb-1">5. ติดต่อเรา</h2>
                    <p className="text-base text-gray-400 leading-relaxed">
                        หากคุณมีคำถามหรือข้อกังวลเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ โปรดติดต่อเราที่ <strong>support@wbabybird.com</strong>
                    </p>

                    <p className="text-base text-gray-400 leading-relaxed text-right mt-6">อัปเดตล่าสุด: 18/08/2024</p>
                </div>
            ) : (
                <div>
                    <h1 className="text-xl font-bold text-center text-gray-400 mb-6">Privacy Policy</h1>
                    <p className="text-base text-gray-400 leading-relaxed mb-2">
                        Thank you for using our game. This game is developed and provided by <strong>W Baby Bird</strong>. We are committed to protecting your personal data and want to inform you that this game does not collect any personal data except for <strong>Notification Tokens</strong>.
                    </p>

                    <h2 className="text-md font-semibold text-blue-600 mb-1">1. Information We Collect</h2>
                    <p className="text-base text-gray-400 leading-relaxed mb-2">
                        We only collect <strong>Notification Tokens</strong>, which are codes used to send various notifications to your device.
                    </p>

                    <h2 className="text-md font-semibold text-blue-600 mb-1">2. How We Use Your Information</h2>
                    <p className="text-base text-gray-400 leading-relaxed mb-2">
                        The Notification Tokens we collect will be used to:
                    </p>
                    <ul className="list-disc list-inside text-base text-gray-400 leading-relaxed mb-2">
                        <li>Send notifications about game updates</li>
                        <li>Inform you of news and promotions related to the game</li>
                    </ul>

                    <h2 className="text-md font-semibold text-blue-600 mb-1">3. Data Security</h2>
                    <p className="text-base text-gray-400 leading-relaxed mb-2">
                        We are committed to protecting your Notification Tokens with appropriate security measures. This data will not be used or disclosed to third parties unless required by law.
                    </p>

                    <h2 className="text-md font-semibold text-blue-600 mb-1">4. Changes to This Privacy Policy</h2>
                    <p className="text-base text-gray-400 leading-relaxed mb-2">
                        We may update this Privacy Policy in the future. Any changes will be posted on this page along with the updated revision date.
                    </p>

                    <h2 className="text-md font-semibold text-blue-600 mb-1">5. Contact Us</h2>
                    <p className="text-base text-gray-400 leading-relaxed">
                        If you have any questions or concerns about this Privacy Policy, please contact us at <strong>support@wbabybird.com</strong>
                    </p>

                    <p className="text-base text-gray-400 leading-relaxed text-right mt-6">Last updated: 18/08/2024</p>
                </div>
            )}
        </div>
    );
};

export default PrivacyPolicy;
