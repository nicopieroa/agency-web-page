import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export function Article() {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className='card'>
            <Card.Section>
                <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs" className='card-group'>
                <Text weight={500}>Título del Artículo</Text>
                <Badge color="pink" variant="light" className='tagCard'>
                    Etiqueta
                </Badge>
            </Group>

            <Text size="sm" color="dimmed">
                Descripción del artículo...
            </Text>

            <Button variant="light" fullWidth mt="md" radius="md" className='cardButton'>
                Leer artículo
            </Button>
        </Card>
    )
}