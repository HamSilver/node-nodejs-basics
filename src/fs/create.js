import { open, access, constants } from "node:fs/promises";

const fileName = "./files/fresh.txt";
const dataStr = "I am fresh and young";
const errorMsg = "FS operation failed";
const errorMsgCrash = "Error occurred while creating the file";
const successMsg = "File successful created";

// проверка существования файла
const isExist = async (file) => {
  try {
    await access(file, constants.F_OK);
  } catch (_) {
    return false;
  }
  return true;
};

const create = async () => {
  try {
    const x = await isExist(fileName);
    if (await isExist(fileName)) {
      // file exist
      throw { message: errorMsg };
    } else {
      // write to file
      const file = open(fileName, "w");
      (await file).writeFile(dataStr);
      console.log(successMsg);
    }
  } catch (error) {
    console.error(error.message);
  }
};

await create();
