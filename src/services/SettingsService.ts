import  {getCustomRepository} from "typeorm";
import {SettingsRepository} from "../repositories/SettingsRepository"; 



interface ISettingCreate {
    chat: boolean;
    username: string;
}



class SettingsService { 

    async create({chat , username} : ISettingCreate) { 
        const settingsRepository = getCustomRepository(SettingsRepository);

        const userAlreadyExists = await settingsRepository.findOne({
            username
        }) ; 

        if(userAlreadyExists) {
            throw new Error ("User Already Exists!");
        }

        const settings = settingsRepository.create({
        chat,
        username,
    })

    await settingsRepository.save(settings);

    return settings;


    }
}


export { SettingsService }