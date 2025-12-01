import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useRole = () => {
  const { user, loading: authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { isLoading: roleLoading, data: role = 'user' } = useQuery({
    queryKey: ['user-role', user?.email],
    enabled: !!user?.email && !authLoading,  // ⬅️ prevents early request
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}/role`);
      return res.data?.role || 'user';
    }
  });

  return { role, roleLoading };
};

export default useRole;
