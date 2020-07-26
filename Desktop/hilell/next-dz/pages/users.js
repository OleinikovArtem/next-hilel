import { MainLayout } from "../components/MainLayout";
import { User } from "../components/User";

export default function Users(props) {
  const { data } = props

  const users = data?.map(({ id, name, eyeColor }) => (
    <User key={id + name} name={name} eyeColor={eyeColor} />
  ))
  return (
    <MainLayout title={'Users page'}>
      <h1>Users page</h1>
      <div className="container">
        {users}
      </div>

      <style jsx>{`
        .container {
          padding: 20px;
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      `}</style>
    </MainLayout>
  )
}

export async function getServerSideProps() {

  const res = await fetch(`http://www.json-generator.com/api/json/get/cgcEEPXOJK?indent=2`)
  const data = await res.json()

  return { props: { data } }
}
