// contact.tsx
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  setStatus('sending');

  try {
    const result = await emailjs.send(
      'service_b6z0399',
      'template_6vqny7k',
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      },
      'NPuLILvRvXJKrMrRQ'
    );

    if (result.text === 'OK') {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
    console.error(error);
  }
}

  return (
    <div className={styles.container}>
      <h2>Contáctanos</h2>
      <p>Envíanos un mensaje y te responderemos lo antes posible.</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Mensaje</label>
          <textarea
            className={styles.textarea}
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: '1rem', borderRadius: '0.25rem', border: 'none', padding: '0.5rem 1rem' }}  
        disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Enviar'}
        </button>

        {status === 'success' && (
          <p className={styles.success}>¡Mensaje enviado con éxito!</p>
        )}
        {status === 'error' && (
          <p className={styles.error}>Hubo un error al enviar el mensaje.</p>
        )}
      </form>
    </div>
  );
}
