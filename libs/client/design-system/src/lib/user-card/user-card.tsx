export interface UserCardProps {
  name: String;
  email: String;
}

/**
 * A super cool way top show off our users
 */
export const UserCard = ({ name, email }: UserCardProps) => (
  <div
    style={{
      border: '1px solid rgba(0,0,0,0.1)',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: 'rgba(0,0,0,0.2) 2px 2px 10px',
      fontFamily: 'sans-serif',
    }}
  >
    <h2>{name}</h2>
    <p style={{ color: 'rgba(0,0,0,0.5)' }}>{email}</p>
  </div>
);
