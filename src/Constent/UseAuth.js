import useSupaBase from './UseSupabase';

const useAuth = async () => {
  const supabase = useSupaBase();
  console.log(await supabase.auth.user());

  return;
};
export default useAuth;
