import ytdl from "ytdl-core";
import fs from "fs";

export const download = (videoId) => new Promise( (resolve, reject) =>  {
    const videoURL = "https://www.youtube.com/shorts/" + videoId;
    console.log("Realizando o download do video:", videoId);

    ytdl(videoId, {quality: "lowestaudio", filter: "audioonly"})
     .on("info", (info) => {
        const seconds = info.formats[0].approxDurationsMs / 1000;

        if(seconds > 60) {
            throw new Error ("A duração do vídeo é maior que 60 segundos")
        }
     })
     .on("end", () => {
        console.log("Download do vídeo finalizado")
        resolve()
     })
     .on("error", (error) => {
        console.log("Não foi possível realizar o download do vídeo. Detalhes:", error)
        reject()
     })
     .pipe(fs.createWriteStream("./tmp/audio.mp4"))
})