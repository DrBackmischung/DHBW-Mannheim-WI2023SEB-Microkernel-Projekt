export const TomPluginPage: React.FC = () => (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>😂 Lachen garantiert!</h2>
        <p>Tom war hier... und konnte sich vor Lachen nicht halten:</p>
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Om9fZp-jdQQ?autoplay=1&mute=1"
            title="Very funny video - Laughing guy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ marginTop: '1rem', borderRadius: '12px' }}
        ></iframe>
    </div>
);
