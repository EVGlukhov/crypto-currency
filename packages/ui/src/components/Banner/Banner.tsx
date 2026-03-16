interface Props {
    instanceName: string;
}
export default function Banner({ instanceName }: Props) {
    return <h1>Welcome to the {instanceName} portal</h1>;
}