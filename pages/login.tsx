import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Home.module.css'
import Header from './header'
import Link from 'next/link'


export default function Login() {
  return (
    <div className={styles.container}>
        <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to <a href="/">Jōdō</a>
        </h1>
        
        <LoginForm />

      </main>

        
    </div>
  )
}

const LoginForm = () => {
    return (

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            {/* TODO: Change Link to validate user once auth is complete */}

            <div className="d-grid gap-2">
                <Button variant="white" type="submit"><Link href="/dashboard">Login</Link></Button>
            </div>
    </Form>
    )
}            


