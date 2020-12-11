import { anoSanto } from './index';
import { strictEqual } from "assert";

describe(('Comprobación de año santo'), () => {
  it('test 2020', () => { strictEqual(anoSanto(2020), false) })
  //años santos pasados
  it('test 1993', () => { strictEqual(anoSanto(1993), true) })
  it('test 1995', () => { strictEqual(anoSanto(1995), false) })
  it('test 1999', () => { strictEqual(anoSanto(1999), true) })
  it('test 2002', () => { strictEqual(anoSanto(2002), false) })
  it('test 2004', () => { strictEqual(anoSanto(2004), true) })
  it('test 2006', () => { strictEqual(anoSanto(2006), false) })
  it('test 2010', () => { strictEqual(anoSanto(2010), true) })
  //años santos futuros
  it('test 2021', () => { strictEqual(anoSanto(2021), true) })
  it('test 2022', () => { strictEqual(anoSanto(2022), false) })
  it('test 2027', () => { strictEqual(anoSanto(2027), true) })
  it('test 2032', () => { strictEqual(anoSanto(2032), true) })
  it('test 2033', () => { strictEqual(anoSanto(2033), false) })
  it('test 2038', () => { strictEqual(anoSanto(2038), true) })
  it('test 2055', () => { strictEqual(anoSanto(2055), true) })

  it('test 2105', () => { strictEqual(anoSanto(2105), false) })
  it('test 2106', () => { strictEqual(anoSanto(2106), true) })
  it('test 2107', () => { strictEqual(anoSanto(2107), false) })
  
})