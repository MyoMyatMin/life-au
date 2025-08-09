import { getAllApplications } from "@/lib/wordpress";
import SimpleSearch from '../../components/common/searchBar';
import AppsClient from "./AppsClient";


export default async function Apps() {
  const apps = await getAllApplications();

  return (
    // Create AppsClient component
    // Pass apps to AppsClient as onSearch function cannot be passed 
    // as props to client component SimpleSearch
    <AppsClient apps={apps} />
  );
}
