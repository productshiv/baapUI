import React, { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import Typography from '../Typography/Typography';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Basic modal example
const BasicModalExample = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button title="Open Modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <Typography variant="h6">Modal Title</Typography>
        <Typography style={{ marginVertical: 20 }}>
          This is a basic modal with some content.
        </Typography>
      </Modal>
    </View>
  );
};

export const Basic: Story = {
  render: () => <BasicModalExample />,
};

// Confirmation dialog example
const ConfirmationModalExample = () => {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState<string>('');

  const handleConfirm = () => {
    setResult('Action confirmed!');
    setVisible(false);
  };

  return (
    <View style={{ gap: 20, alignItems: 'center' }}>
      <Button title="Delete Item" onPress={() => setVisible(true)} />
      {result && <Typography style={{ color: '#4CAF50' }}>{result}</Typography>}
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <Typography variant="h6">Confirm Delete</Typography>
        <Typography style={{ marginVertical: 20 }}>
          Are you sure you want to delete this item?
        </Typography>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Button title="Cancel" onPress={() => setVisible(false)} />
          <Button title="Delete" onPress={handleConfirm} />
        </View>
      </Modal>
    </View>
  );
};

export const Confirmation: Story = {
  render: () => <ConfirmationModalExample />,
};

// Form modal example
const FormModalExample = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button title="Edit Profile" onPress={() => setVisible(true)} />
      <Modal visible={visible} onClose={() => setVisible(false)} style={{ width: 400 }}>
        <Typography variant="h6">Edit Profile</Typography>
        <View style={{ width: '100%', gap: 10, marginVertical: 20 }}>
          <View>
            <Typography variant="caption">Name</Typography>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 4,
                padding: 8,
              }}
              placeholder="Enter your name"
            />
          </View>
          <View>
            <Typography variant="caption">Email</Typography>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 4,
                padding: 8,
              }}
              placeholder="Enter your email"
            />
          </View>
        </View>
        <Button title="Save Changes" onPress={() => setVisible(false)} />
      </Modal>
    </View>
  );
};

export const Form: Story = {
  render: () => <FormModalExample />,
};
