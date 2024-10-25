import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Code } from '@mantine/core';

function ForTest() {
    const [submittedValues, setSubmittedValues] = useState('');

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            firstName: 'Jane',
            lastName: 'Doe',
            age: '33',
        },
    });

    return (
        <>
            <form
                onSubmit={form.onSubmit((values) => {
                    setSubmittedValues(JSON.stringify(values, null, 2))
                    console.log(form.values)
                })}
            >
                <TextInput
                    label="First name"
                    placeholder="First name"
                    key={form.key('firstName')}
                    {...form.getInputProps('firstName')}
                />
                <TextInput
                    label="Last name"
                    placeholder="Last name"
                    mt="md"
                    key={form.key('lastName')}
                    {...form.getInputProps('lastName')}
                />
                <TextInput
                    type="number"
                    label="Age"
                    placeholder="Age"
                    mt="md"
                    key={form.key('age')}
                    {...form.getInputProps('age')}
                />
                <Button type="submit" mt="md">
                    Submit
                </Button>
            </form>

            {submittedValues && (
                <Code block mt="md">
                    {submittedValues}
                </Code>
            )}
        </>
    );
}
export default ForTest;