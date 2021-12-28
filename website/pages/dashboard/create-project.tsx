import { FormSection } from 'components/FormSection';
import { ContentContainer } from 'components/misc/ContentContainer';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from 'styles/dashboard/create-project.module.scss';

interface FrameworkSelectionState {
  nextjs: boolean;
  express: boolean;
}

interface FormFields {
  projectName: string;
  createGithubRepo: boolean;
}

export default function CreateProject() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormFields>();
  const onSubmit = (data: any) => console.log(data);

  const [technologySelections, setTechnologySelections] =
    useState<FrameworkSelectionState>({ nextjs: false, express: false });

  const updateFrameworkSelection =
    (key: keyof FrameworkSelectionState) => () => {
      setTechnologySelections({
        ...technologySelections,
        [key]: !technologySelections[key]
      });
    };

  return (
    <div>
      <title>Create Project</title>

      <header className={styles.header}>
        <h1 className={styles.title}>Start a new idea</h1>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <ContentContainer className="my-32">
          <FormSection name="General">
            <FormSection.TextInput name="Project name" />
          </FormSection>

          <FormSection name="Frameworks">
            <div className="flex flex-row space-x-10 mt-8">
              <FormSection.CardSelector
                name="NextJS"
                imageSrc="/images/frameworks/nextjs-circle.svg"
                selected={technologySelections.nextjs}
                setSelected={updateFrameworkSelection('nextjs')}
              />
              <FormSection.CardSelector
                name="ExpressJS"
                imageSrc="/images/frameworks/rest-api.png"
                selected={technologySelections.express}
                setSelected={updateFrameworkSelection('express')}
              />
            </div>
          </FormSection>

          <FormSection name="Settings">
            <div className="mb-6">
              <FormSection.Subtitle name="NextJS" />
              <FormSection.Checkbox name="Typescript" />
            </div>

            <div>
              <FormSection.Subtitle name="ExpressJS" />
              <FormSection.Checkbox name="Typescript" />
              <FormSection.Checkbox name="Generate compiled output" />
              <FormSection.Checkbox name="Limit request size" />
            </div>
          </FormSection>

          <div className={styles.submitContainer}>
            <h1>Bring your idea to life</h1>

            <h2>For every day, is a new day.</h2>

            <button type="submit" className={styles.submitButton}>
              Create project
            </button>
          </div>
        </ContentContainer>
      </form>
    </div>
  );
}
