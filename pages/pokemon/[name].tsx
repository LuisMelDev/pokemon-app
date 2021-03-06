import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import Image from "next/image";

import { pokeApi } from "api";
import { Pokemon, PokemonDetails } from "interfaces";
import { Layout } from "components/layouts";
import { Grid, Card, Button, Container, Text } from "@nextui-org/react";

interface Props {
    pokemon: PokemonDetails;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    return (
        <Layout title={`Pokemon ${pokemon.name}`}>
            <Grid.Container css={{ marginTop: "5px" }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: "30px" }}>
                        <Card.Body>
                            <Card.Image
                                src={
                                    pokemon.sprites.other?.dream_world
                                        .front_default || "/no-image.png"
                                }
                                alt={pokemon.name}
                                width='100%'
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header
                            css={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text h1 transform='capitalize'>
                                {pokemon.name}
                            </Text>

                            <Button color='gradient' ghost>
                                Guardar en favoritos
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Text size={30}>Sprites:</Text>

                            <Container direction='row' display='flex' gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data } = await pokeApi.get(`/pokemon/${ctx.params?.name}`);

    return {
        props: {
            pokemon: data,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await pokeApi.get("/pokemon?limit=108");

    const paths = data.results.map((pokemon: Pokemon) => {
        return {
            params: {
                name: pokemon.name,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export default PokemonPage;
