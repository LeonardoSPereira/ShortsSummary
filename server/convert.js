import fs from "fs";
import wav from "node-wav";
import ffmpeg from "fluent-ffmpeg";
import ffmpegStatic from "ffmpeg-static";


const filePath = "./tmp/audio.mp4";
const outuputPath = filePath.replace(".mp4", ".wav");

export const convert = () => new Promise((resolve, reject) => {
    console.log("convertendo o audio...");

    ffmpeg.setFfmpegPath(ffmpegStatic);
    ffmpeg()
     .input(filePath)
     .audioFrequency(16000)
     .audioChannels(1)
     .format("wav")
     .on("end", () => {
        const file = fs.readFileSync(outuputPath)
        const fileDecoded = wav.decode(file)

        const audioData = fileDecoded.channelData[0]
        const floatArray = new Float32Array(audioData)

        console.log("Áudio convertido com sucesso!")

        resolve(floatArray)
        fs.unlinkSync(outuputPath)

     })
     .on("error", (error) => {
        console.log("Erro ao converter o vídeo:", error)
        reject(error)  
     })
     .save(outuputPath)
})