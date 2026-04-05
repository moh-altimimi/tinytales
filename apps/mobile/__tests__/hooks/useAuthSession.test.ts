import {renderHook, waitFor, act} from '@testing-library/react-native';

import {useAuthSession} from '../../hooks/useAuthSession';
import {supabaseClient} from '../../lib/supabase';

jest.mock('../../lib/supabase', () => ({
  supabaseClient: {
    auth: {
      getSession: jest.fn(),
      onAuthStateChange: jest.fn(),
    },
  },
}));

const mockGetSession = supabaseClient.auth.getSession as jest.Mock;
const mockOnAuthStateChange = supabaseClient.auth.onAuthStateChange as jest.Mock;

describe('useAuthSession', () => {
  const mockUnsubscribe = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockOnAuthStateChange.mockReturnValue({
      data: {subscription: {unsubscribe: mockUnsubscribe}},
    });
  });

  it('starts in a loading state', async () => {
    mockGetSession.mockResolvedValue({data: {session: null}});

    const {result} = renderHook(() => useAuthSession());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isAuthenticated).toBe(false);

    await act(async () => {});
  });

  it('resolves to authenticated when a session exists', async () => {
    mockGetSession.mockResolvedValue({
      data: {session: {user: {id: 'user-1'}}},
    });

    const {result} = renderHook(() => useAuthSession());

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('resolves to unauthenticated when no session', async () => {
    mockGetSession.mockResolvedValue({data: {session: null}});

    const {result} = renderHook(() => useAuthSession());

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('subscribes to auth state changes', async () => {
    mockGetSession.mockResolvedValue({data: {session: null}});

    renderHook(() => useAuthSession());

    expect(mockOnAuthStateChange).toHaveBeenCalledTimes(1);

    await act(async () => {});
  });

  it('unsubscribes on unmount', async () => {
    mockGetSession.mockResolvedValue({data: {session: null}});

    const {unmount} = renderHook(() => useAuthSession());

    await act(async () => {});
    unmount();

    expect(mockUnsubscribe).toHaveBeenCalledTimes(1);
  });
});
