import { Container } from './styles';

export function Textarea({ value, onChange, ...rest }) {
    return (
        <Container 
            value={value} // Passa o valor atual
            onChange={onChange} // Lida com a mudança
            {...rest}
        />
    );
}

