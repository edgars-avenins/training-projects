import { convRate } from './conversionRateClass';
export const CONVRATESKILO: convRate[] = [
  { unit: 'kilometer', value: 1},
  { unit: 'meter', value: 1*10**3},
  { unit: 'centimeter', value: 1*10**5},
  { unit: 'milimeter', value: 1*10**6},
  { unit: 'micrometer', value: 1*10**9},
  { unit: 'nanometer', value: 1*10**12}
]
export const CONVRATESMETER: convRate[] = [
  { unit: 'kilometer', value: 1*10**-3},
  { unit: 'meter', value: 1},
  { unit: 'centimeter', value: 1*10**2},
  { unit: 'milimeter', value: 1*10**3},
  { unit: 'micrometer', value: 1*10**6},
  { unit: 'nanometer', value: 1*10**9}
]
export const CONVRATESCENTI: convRate[] = [
  { unit: 'kilometer', value: 1*10**-5},
  { unit: 'meter', value: 1*10**-2},
  { unit: 'centimeter', value: 1},
  { unit: 'milimeter', value: 1*10},
  { unit: 'micrometer', value: 1*10**4},
  { unit: 'nanometer', value: 1*10**7}
]
export const CONVRATESMILI: convRate[] = [
  { unit: 'kilometer', value: 1*10**-6},
  { unit: 'meter', value: 1*10**-3},
  { unit: 'centimeter', value: 1*10**-1},
  { unit: 'milimeter', value: 1},
  { unit: 'micrometer', value: 1*10**3},
  { unit: 'nanometer', value: 1*10**6}
]
export const CONVRATESMICRO: convRate[] = [
  { unit: 'kilometer', value: 1*10**-9},
  { unit: 'meter', value: 1*10**-6},
  { unit: 'centimeter', value: 1*10**-4},
  { unit: 'milimeter', value: 1*10**-3},
  { unit: 'micrometer', value: 1},
  { unit: 'nanometer', value: 1*10**3}
]
export const CONVRATESNANO: convRate[] = [
  { unit: 'kilometer', value: 1*10**-12},
  { unit: 'meter', value: 1*10**-9},
  { unit: 'centimeter', value: 1*10**-7},
  { unit: 'milimeter', value: 1*10**-6},
  { unit: 'micrometer', value: 1*10**-3},
  { unit: 'nanometer', value: 1}
]
