<template>
  <div id="app">
    <div class="container">
      <h1>Asset List</h1>
      <div class="card">
        <table>
          <thead>
            <tr>
              <th>Asset Name</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="asset in assets" :key="asset.name">
              <td>{{ asset.name }}</td>
              <td>{{ asset.department }}</td>
            </tr>
          </tbody>
        </table>
        <div class="button-container">
          <button @click="downloadCSV" class="download-btn">Download CSV</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      assets: [
        { name: 'Printer', department: 'HR' },
        { name: 'Monitor', department: 'IT' },
        { name: 'Barcode Scanner', department: 'ACCOUNT' }
      ]
    }
  },
  methods: {
    downloadCSV() {
      const csvContent = "data:text/csv;charset=utf-8," 
        + "Asset name,Department\n"
        + this.assets.map(asset => `${asset.name},${asset.department}`).join("\n");
      
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "assets.csv");
      document.body.appendChild(link);
      link.click();
    }
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 600px;
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 20px;

}

.card {
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;

}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  color: #333;
}

th {
  background-color: #e6e6e6;
  font-weight: bold;
  color: #333;
  padding: 12px;
  text-align: left;
}
th:first-child {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

th:last-child {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
}

.download-btn {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  color: #333;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s;
}

.download-btn:hover {
  background-color: #e0e0e0;
}
</style>