import { STATUS_CODES } from "../../src/Utils/Enum";
import Axios from "../../src/Utils/Axios";
import { Department } from "../Model/Department";

export const getAllAsync = async (): Promise<{
  data: Department[];
  message: string;
}> => {
  try {
    const { data, status } = await Axios.get<Department[]>(
      `/Department/GetAllDepartments`
    );
    switch (status) {
      case STATUS_CODES.SUCCESS: {
        return { data, message: "SUCCESS" };
      }
      case STATUS_CODES.NOT_FOUND: {
        return { data: [], message: "NOT_FOUND" };
      }
      case STATUS_CODES.ERROR: {
        return { data: [], message: "ERROR" };
      }
      case STATUS_CODES.BAD_REQUEST: {
        return { data: [], message: "BAD_REQUEST" };
      }
      case STATUS_CODES.UNAUTHORIZED: {
        return { data: [], message: "UNAUTHORIZED" };
      }

      default: {
        return { data: [], message: "Unknown error occurred" };
      }
    }
  } catch (error) {
    if (error) {
      return { data: [], message: "ERROR" };
    }
  }
  return { data: [], message: "ERROR" };
};
