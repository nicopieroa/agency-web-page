import { Burger, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';

export function NavBar() {
    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';

    return (
        <nav className='navBar'>
            <a href='#home'>
                <img src="/images/logo.png" alt="Web Logo" className='logoImg' />
            </a>

            <div className='actionCall-burger-container'>
                <Button radius="md" size="xs" uppercase className='contactButton'>
                    Hablemos
                </Button>

                <Burger opened={opened} onClick={toggle} aria-label={label} />
            </div>
        </nav>
    )
}