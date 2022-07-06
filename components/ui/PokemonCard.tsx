import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Pokemon } from "interfaces";
import Link from "next/link";
import { FC } from "react";

interface Props {
    pokemon: Pokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
    return (
        <Link href={`/pokemon/${pokemon.name}`}>
            <Grid xs={6} sm={3} md={2} lg={1}>
                <Card isHoverable isPressable>
                    <Card.Body css={{ p: 2 }}>
                        <Card.Image
                            width='100%'
                            css={{
                                height: "140px",
                            }}
                            src={pokemon.img}
                        />
                    </Card.Body>
                    <Card.Footer>
                        <Row justify='space-between'>
                            <Text transform='capitalize'>{pokemon.name}</Text>
                            <Text>{pokemon.id}</Text>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
        </Link>
    );
};
