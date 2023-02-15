import axios from '../../utils/interceptors';

const getTaskList = async () => {
  try {
    const response = await axios.get('http://localhost:3000/todo/tasklist');
    const data = response.data;
    if (response.status !== 200) {
        throw new Error('Unable to retrieve task list');
      } else {
        return data;
      }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        throw error;
    }
};

export default getTaskList;

// export const getTaskListbyId = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/todo/tasklist');
//       const data = response.data;
//       if (response.status !== 200) {
//           throw new Error('Unable to retrieve task list');
//         } else {
//           return data;
//         }
//       } catch (error) {
//           // eslint-disable-next-line no-console
//           console.log(error);
//           throw error;
//       }
//   };
