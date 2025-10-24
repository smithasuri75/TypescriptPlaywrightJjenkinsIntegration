
import * as path from 'path';
import * as XLSX from 'xlsx';

export class ExcelHelper {
    static readExcelData(fileName: string, sheetName: string): any[] {
        const filePath = path.join(__dirname, '../test-data', fileName);
        const workbook = XLSX.readFile(filePath);
        const worksheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(worksheet);
    }
}
export function readFile(filePath: string) {
    throw new Error('Function not implemented.');
}

