import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export const export_csv = (data, filename) => {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.csv';
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
  const excelBuffer = XLSX.write(wb, { bookType: 'csv', type: 'array' });
  const dataFile = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(dataFile, filename + fileExtension);
}
