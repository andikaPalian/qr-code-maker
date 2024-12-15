import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([
    {
        message: "Masukkan link yang ingin anda ubah menjadi QR CODE : ",
        name: "Link"
    }
]).then((answers) => {
    const url = answers.Link;
    var qr_image = qr.image(url);
    qr_image.pipe(fs.createWriteStream("QRCODE_ANDA.png"));

    fs.writeFile("URL_QRCODE.txt", url, (err) => {
        if (err) {
            throw err;
        }
        console.log("File has been saved");
    });
});