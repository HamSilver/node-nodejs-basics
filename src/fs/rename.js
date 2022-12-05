import { rename as frename, access, constants } from "node:fs/promises";

const fileFrom = "./files/wrongFilename.txt";
const fileTo = "./files/properFilename.md";
const errorMsg = "FS operation failed";
const successMsg = "File successful renamed";

// проверка существования файла
const isExist = async (file) => {
  try {
    await access(file, constants.F_OK);
  } catch (_) {
    return false;
  }
  return true;
};

const rename = async () => {
  try {
    if ((await isExist(fileFrom)) && !(await isExist(fileTo))) {
      await frename(fileFrom, fileTo);
      console.log(successMsg);
    } else {
      throw { message: errorMsg };
    }
  } catch (error) {
    console.error(error.message);
  }
};

await rename();
