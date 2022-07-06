import { Container, Text, useTheme, Link as UILink } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    const { theme } = useTheme();
    return (
        <Container
            alignItems='center'
            display='flex'
            justify='space-between'
            css={{
                padding: "0 1.5rem",
                background: theme?.colors.backgroundContrast.value,
            }}
            xl
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Image
                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                    width={70}
                    height={70}
                    alt='Pokemon'
                />
                <Text color='white' h2>
                    P
                </Text>
                <Text color='white' h3>
                    okemon
                </Text>
            </div>
        </Container>
    );
};
