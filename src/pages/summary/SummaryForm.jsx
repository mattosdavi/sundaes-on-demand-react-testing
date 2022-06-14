import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const checkBoxLabel = (
    <span>
      I agree to
      <span style={{ color: 'blue' }}> Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkBoxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>Confirm order</Button>
    </Form>
  );
}