import { MATHAMETICAL_OPERATORS, selecetdInputArray } from "../constant"

export const mathameticalOperation = (inp: selecetdInputArray): {
    message: string,
    result: number
} => {
    try {
        const valid_mathametical_operations: selecetdInputArray = []; 
        inp.map((x: string | number, index: number) => {
            if(typeof x === 'string' && ['\u00D7', '\u2212', '\u00F7'].includes(x.trim())){
                const d = x.trim();
                x = MATHAMETICAL_OPERATORS[
                    d as unknown as '\u00D7' | '\u2212' | '\u00F7'
                ]
            }
            const previous_val = inp[index -1];
            if(x === '(' && Number(previous_val) ){
                valid_mathametical_operations.push(' * ');
            }
            valid_mathametical_operations.push(x);
        });
        const join_value = valid_mathametical_operations.join('');
        const mathametical_result = eval(join_value)

        return {
            message: 'sucess_full',
            result: mathametical_result
        }
    } catch (error) {
        return {
            message: (error as Error).message as unknown as string,
            result: 0
        };
    }
}