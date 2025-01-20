import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import FooterMenu from './components/FooterMenu';

function Profile() {
    const [name, setName] = useState('');

    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <form
            className="row"
            onSubmit={(e) => {
                e.preventDefault();
            }}
            >
            <input
                id="greet-input"
                onChange={(e) => setName(e.currentTarget.value)}
                placeholder="名前を入力してください"
            />
            <button type="submit">Greet</button>
            </form>
            <div className="profile-details">
            <h2>Details</h2>
            <p>Name: {name}</p>
            </div>
            <FooterMenu />
        </div>
    );
}

const root = createRoot(document.getElementById('root')!);
root.render(<Profile />);
