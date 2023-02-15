import axios from '../../utils/interceptors';


const taskDelete = async (taskId: number) => {
    try {
      const response = await axios.delete(`http://localhost:3000/todo/taskdelete/${taskId}`);
      if (response.status === 200) {
          // eslint-disable-next-line no-console
          console.log('responsedata',response.data);
        return response.data;
      } else {
        throw new Error(`Unable to delete task with id ${taskId}. Response status: ${response.status}`);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      throw error;
    }
  };

export default taskDelete;