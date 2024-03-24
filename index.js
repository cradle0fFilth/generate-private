import { privateKeyToAccount, generatePrivateKey } from 'viem/accounts';
import { writeFile } from 'fs/promises';

const filePath = "public-private";

async function writeToFile(privateKey, account) {
    try {
        await writeFile(filePath, privateKey + " " + account.address + '\n', { flag: 'a' });
        console.log('文件已成功写入');
    } catch (err) {
        console.error('写入文件时发生错误', err);
    }
}

async function generateAndWriteToFile() {
    for (let i = 0; i < 1000; i++) {
        const privateKey = generatePrivateKey();
        const account = privateKeyToAccount(privateKey);
        await writeToFile(privateKey, account);
    }
}

generateAndWriteToFile();
