export interface Header {
  id?: number;

  date: string | null;
  product: string;
  quantity: number;
  lifting_points: number;

  max_load: number | null;
  unit_load: number | null;

  operation: string;

  beam_capacity: number | null;

  user_la: {
    id: number;
  };

  beam: {
    id: number;
  };
}
