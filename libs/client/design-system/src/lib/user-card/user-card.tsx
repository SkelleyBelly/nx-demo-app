import {Button} from '../button'
import {Box} from '../box'

export interface UserCardProps {
  name: string;
  email: string;
  onRename: () => void;
}

/**
 * A super cool way top show off our users
 */
export const UserCard = ({ name, email, onRename }: UserCardProps) => (
  <div
    style={{
      border: '1px solid rgba(0,0,0,0.1)',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: 'rgba(0,0,0,0.2) 2px 2px 10px',
      fontFamily: 'sans-serif',
    }}
  >
    <Box display="flex" justifyContent="space-between">
      <Box>
        <h2>{name}</h2>
        <p style={{ color: 'rgba(0,0,0,0.5)' }}>{email}</p>

      </Box>

      <Box alignSelf="center">
        <Button variant="outlined" color="error" onClick={onRename}>Rename</Button>
      </Box>
    </Box>
  </div>
);
