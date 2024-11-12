import React, {FC} from 'react';
import {Box, Text} from '@mantine/core'

interface MyLabelProps {
    title: string,
    text: string,
}

const MyLabel: FC<MyLabelProps> = props => {
    return (
        <Box w={600}>
            <Text size={"xl"} mb={10}>{props.title} </Text>
            <div style={{
                border: "solid 1px black",
                borderRadius: "10px",
                padding: "10px",
                background: "white",
                marginBottom: '5px',
                height: '40px'
            }}>
                <Text size={"lg"}>{props.text}</Text>
            </div>
        </Box>
    );
};

export default MyLabel;