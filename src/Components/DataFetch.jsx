
    export const fetchData = async () => {
      const response = await fetch('https://api.github.com/users/JoshuaOzibo/repos');
      const jsonData = await response.json();

      return jsonData;

    }
    fetchData();
