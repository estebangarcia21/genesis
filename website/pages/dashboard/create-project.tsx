import { FormSection } from 'components/FormSection';
import { ContentContainer } from 'components/misc/ContentContainer';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

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

      <div className="bg-blueB p-4 text">
        <h1 className="text-center font-semibold text-white">
          Start a new idea
        </h1>
      </div>

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

          <div className="mt-16 bg-gradient-to-tr from-blueA to-blueB p-12 rounded shadow-lg">
            <h1 className="text-3xl text-white font-bold">
              Bring your idea to life
            </h1>
            <h2 className="text-white mt-2">For every day, is a new day.</h2>

            <button
              type="submit"
              className="mt-6 bg-yellowB font-medium rounded-full px-8 py-2 text-sm"
            >
              Create project
            </button>
          </div>
        </ContentContainer>
      </form>
    </div>
  );
}
