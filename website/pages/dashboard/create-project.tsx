import styles from 'styles/dashboard/create-project.module.scss';
import { DashboardCreateProjectCardSelector } from 'components/DashboardCreateProjectCardSelector';
import { ContentContainer } from 'components/misc/ContentContainer';
import { useForm } from 'react-hook-form';

interface FormProps {
  projectName: string;
  createGithubRepo: boolean;
}

export default function CreateProject() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <title>Create Project</title>

      <ContentContainer tag="main" className="my-32">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className={styles.section}>
            <h1>What technologies will you be using in your app?</h1>
          </section>

          <div className="flex flex-row mt-8 space-x-10">
            <DashboardCreateProjectCardSelector
              name="Express"
              imageSrc="/images/frameworks/rest-api.png"
            />
            <DashboardCreateProjectCardSelector
              name="NextJS"
              imageSrc="/images/frameworks/nextjs-circle.svg"
            />
          </div>

          <button type="submit">Create project</button>
        </form>
      </ContentContainer>
    </div>
  );
}
