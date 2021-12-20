import { ContentContainer } from 'components/misc/ContentContainer';

export default function CreateProject() {
  return (
    <div>
      <title>Create Project</title>

      <ContentContainer tag="main" className="my-32">
        <h1 className="text-4xl font-semibold">
          What would you like to build today?
        </h1>
      </ContentContainer>
    </div>
  );
}
