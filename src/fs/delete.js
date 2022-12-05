import { rm, access, constants } from "node:fs/promises";

const fileToDelete = "./files/fileToRemove.txt";
const errorMsg = "FS operation failed";
const successMsg = "File successful deleted";

// проверка существования папки
const isExist = async (folder) => {
  try {
    await access(folder, constants.F_OK);
  } catch (_) {
    return false;
  }
  return true;
};

const remove = async () => {
  try {
    if (await isExist(fileToDelete)) {
      await rm(fileToDelete);
      console.log(successMsg);
    } else {
      throw { message: errorMsg };
    }
  } catch (error) {
    console.error(error.message);
  }
};

await remove();
