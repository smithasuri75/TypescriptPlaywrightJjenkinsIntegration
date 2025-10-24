import { test } from '@playwright/test';
import { ExcelHelper } from '../../utils/ExcelHelper';

test('read excel data and print to console', async () => {
    const excelData = ExcelHelper.readExcelData('exceltestdata.xlsx', 'Sheet1');
    console.log('Excel Data:', JSON.stringify(excelData, null, 2));
    excelData.forEach((row, index) => {
        console.log(`Row ${index + 1}:`, row);
    });
});
