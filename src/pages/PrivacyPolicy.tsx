import React, { useState } from 'react';

const PrivacyPolicy = () => {
    const [language, setLanguage] = useState('th'); // ตั้งค่าเริ่มต้นเป็นภาษาไทย

    const toggleLanguage = () => {
        setLanguage(language === 'th' ? 'en' : 'th');
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white bg-opacity-10 shadow-lg rounded-lg mt-10">
            <div className="flex justify-end items-center mb-4">
                <button
                    onClick={toggleLanguage}
                    className="text-gray-300 hover:text-blue-500 transition"
                >
                    {language === 'th' ? 'English' : 'ภาษาไทย'}
                </button>
            </div>

            {language === 'th' ? (
                <div>
                    <h1 className="text-2xl font-bold text-center text-white mb-6">นโยบายความเป็นส่วนตัว</h1>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        ขอบคุณที่ใช้บริการเกมของเรา เกมนี้พัฒนาและให้บริการโดย <strong>W Baby Bird</strong>. เรามุ่งมั่นที่จะปกป้องข้อมูลส่วนบุคคลของคุณ และขอแจ้งให้ทราบว่าเกมนี้ไม่ได้เก็บข้อมูลส่วนบุคคลใด ๆ นอกเหนือจาก <strong>Token สำหรับการแจ้งเตือน</strong> เท่านั้น
                    </p>

                    <h2 className="text-xl font-semibold text-blue-500 mb-2">1. ข้อมูลที่เราเก็บรวบรวม</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        เราเก็บรวบรวมเฉพาะ <strong>Notification Token</strong> ซึ่งเป็นรหัสที่ใช้สำหรับส่งการแจ้งเตือนต่าง ๆ ไปยังอุปกรณ์ของคุณเท่านั้น
                    </p>

                    <h2 className="text-xl font-semibold text-blue-500 mb-2">2. วิธีการใช้ข้อมูลของคุณ</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        Notification Token ที่เราเก็บรวบรวมจะถูกใช้เพื่อ:
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed mb-4">
                        <li>ส่งการแจ้งเตือนเกี่ยวกับการอัปเดตในเกม</li>
                        <li>แจ้งข่าวสารและโปรโมชั่นต่าง ๆ ที่เกี่ยวข้องกับเกม</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-blue-500 mb-2">3. ความปลอดภัยของข้อมูล</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        เรามุ่งมั่นที่จะปกป้อง Notification Token ของคุณด้วยมาตรการความปลอดภัยที่เหมาะสม ข้อมูลนี้จะไม่ถูกใช้หรือเปิดเผยให้กับบุคคลที่สาม ยกเว้นในกรณีที่จำเป็นตามกฎหมาย
                    </p>

                    <h2 className="text-xl font-semibold text-blue-500 mb-2">4. การเปลี่ยนแปลงนโยบายความเป็นส่วนตัว</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        เราอาจปรับปรุงนโยบายความเป็นส่วนตัวนี้ในอนาคต การเปลี่ยนแปลงใด ๆ จะถูกโพสต์บนหน้านี้พร้อมกับวันที่แก้ไขล่าสุด
                    </p>

                    <h2 className="text-xl font-semibold text-blue-500 mb-2">5. ติดต่อเรา</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        หากคุณมีคำถามหรือข้อกังวลเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ โปรดติดต่อเราที่ <strong>support@wbabybird.com</strong>
                    </p>

                    <p className="text-lg text-gray-300 leading-relaxed text-right mt-6">อัปเดตล่าสุด: 18/08/2024</p>

                    <p className="text-lg text-gray-300 leading-relaxed mt-6">
                        รูปภาพ ตัวละครนก และธีมต่าง ๆ ในแอปนี้ได้ถูกสร้างขึ้นโดยใช้ ChatGPT และ Canva รวมถึงการซื้อ asset จาก <a href="https://megacrash.itch.io/" className="text-blue-500 underline">https://megacrash.itch.io/</a>
                    </p>
                </div>
            ) : (
                <div>
                    <h1 className="text-2xl font-bold text-center text-white mb-6">Privacy Policy</h1>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        Thank you for using our game. This game is developed and provided by <strong>W Baby Bird</strong>. We are committed to protecting your personal data and want to inform you that this game does not collect any personal data except for <strong>Notification Tokens</strong>.
                    </p>

                    <h2 className="text-xl font-semibold text-blue-500 mb-2">1. Information We Collect</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        We only collect <strong>Notification Tokens</strong>, which are codes used to send various notifications to your device.
                    </p>

                    <h2 className="text-xl font-semibold text-blue-500 mb-2">2. How We Use Your Information</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        The Notification Tokens we collect will be used to:
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed mb-4">
                        <li>Send notifications about game updates</li>
                        <li>Inform you of news and promotions related to the game</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-blue-500 mb-2">3. Data Security</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        We are committed to protecting your Notification Tokens with appropriate security measures. This data will not be used or disclosed to third parties unless required by law.
                    </p>

                    <h2 className="text-xl font-semibold text-blue-500 mb-2">4. Changes to This Privacy Policy</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        We may update this Privacy Policy in the future. Any changes will be posted on this page along with the updated revision date.
                    </p>

                    <h2 className="text-xl font-semibold text-blue-500 mb-2">5. Contact Us</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        If you have any questions or concerns about this Privacy Policy, please contact us at <strong>support@wbabybird.com</strong>
                    </p>

                    <p className="text-lg text-gray-300 leading-relaxed text-right mt-6">Last updated: 23/08/2024</p>

                    <p className="text-lg text-gray-300 leading-relaxed mt-6">
                        The images, bird characters, and themes in this app were created using ChatGPT and Canva, along with assets purchased from <a href="https://megacrash.itch.io/" className="text-blue-500 underline">https://megacrash.itch.io/</a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default PrivacyPolicy;
