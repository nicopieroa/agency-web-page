import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Textarea } from '@mantine/core';

export function Form() {
    const form = useForm({
        initialValues: { name: '', ema: '', textArea: '' },

        // functions will be used to validate values at corresponding key
        validate: {
            name: (value) => (value.length < 3 ? 'Ingresa tu nombre' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
            textArea: (value) => (value.length < 50 ? 'Escribe tu mensaje' : null),
        },
    });

    return (
        <Box maw={320} mx="auto" className='contactSection'>
            <form onSubmit={form.onSubmit(console.log)}>
                <h2>Dejanos tu consulta</h2>

                <TextInput label="Nombre" placeholder="Juan" {...form.getInputProps('name')} />
                <TextInput mt="sm" label="Email" placeholder="juan@email.com" {...form.getInputProps('email')} />
                <Textarea placeholder="Mensaje" label="Mensaje" {...form.getInputProps('textArea')} />

                <Button type="submit" mt="sm" className='submitButton'>
                    Enviar
                </Button>
            </form>
        </Box>
    );
}