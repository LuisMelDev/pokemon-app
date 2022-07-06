import { GetStaticProps, NextPage } from "next";

import { Layout } from "components";
import { Pokemon } from "interfaces";
import { pokeApi } from "api";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "components";

interface PageProps {
    pokemons: Pokemon[];
}

const HomePage: NextPage<PageProps> = ({ pokemons }) => {
    return (
        <Layout title='Listado de Pokemons'>
            <Grid.Container gap={2} justify='flex-start'>
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </Grid.Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data } = await pokeApi.get("/pokemon?limit=108");

    let pokemons: Pokemon[] = data.results.map(
        (pokemon: { url: string; name: string }) => {
            const id = pokemon.url.split("/").slice(-2)[0];

            return {
                id: id,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
                ...pokemon,
            };
        }
    );

    return {
        props: { pokemons },
    };
};

export default HomePage;
