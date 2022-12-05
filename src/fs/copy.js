import { cp, access, constants } from "node:fs/promises";

const folderFrom = "./files";
const folderTo = "./files_copy";
const errorMsg = "FS operation failed";
const successMsg = "Folder successful copied";

// проверка существования папки
const isExist = async (folder) => {
  try {
    await access(folder, constants.F_OK);
  } catch (_) {
    return false;
  }
  return true;
};

const copy = async () => {
  try {
    if ((await isExist(folderFrom)) && !(await isExist(folderTo))) {
      await cp(folderFrom, folderTo, { recursive: true });
      console.log(successMsg);
    } else {
      throw { message: errorMsg };
    }
  } catch (error) {
    console.error(error.message);
  }
};

copy();
